#!/usr/bin/env python

import sqlite3
import sys
import datetime

reload(sys)
sys.setdefaultencoding( "utf8" )



def printDot():
    print "digraph wikipedia {"
    for page in pages:
        adjacents = [row[1] for row in pages if row[3] == page[0]]
       
	if len(adjacents) > 0:
	    url = page[1].replace("http://en.wikipedia.org/wiki/", "")
	    print "\"http://en.wikipedia.org\" -> \"" + url + "\"",
	    for adj in adjacents:
	        url = adj.replace("http://en.wikipedia.org/wiki/", "")
		print ' -> \"' +  url + "\"",

	    print ";"
    print "}"
	

def printJSON():
    print """var json = ["""

    firstPage = True
    rootList = []
    earliestDate = 0
    for page in pages:
	url = page[1].replace("http://en.wikipedia.org/wiki/", "")
	url = url.replace("http://upload.wikimedia.org/wikipedia/en/", "")
	url = url.replace("http://upload.wikimedia.org/wikipedia/commons/", "")
	url = url.replace("http://en.wikipedia.org/w/index.php?title=Special:Search&search=", "")
	url = url.replace("http://en.wikipedia.org/w/index.php?title=Special%3ASearch&search=", "")
	url = url.replace("Special:Search?search=", "")
	url = url.replace("Special:Search?search=", "")
	url = url.replace("&go=Go", "")
	url = url.replace("&ns0=1", "")
	url = url.replace("&redirs=0", "")
	children = [row[0] for row in pages if row[3] == page[0] and row[6] != 1]
	parents = [row[3] for row in pages if row[0] == page[0]]
	relatedrow = [row for row in pages if row[0] == page[0] or row[3] == page[0]]

	if page[0] != 0 and (firstPage or earliestDate > page[7]):
	    earliestDate = page[7]
	    print >> sys.stderr,  datetime.datetime(1970, 1, 1) + datetime.timedelta(microseconds=earliestDate)
#	    print >> sys.stderr, "Earliest date is now: " + eDateStr 

        isRoot = False

	if page[6] == 1: 
	    isRoot = True

	if page[0] == 0:
	    children.extend(rootList)

        # too many one pagers
	if isRoot and len(children) < 1:
	    continue


        if not firstPage:
	    print '\t,',
	print '{'
	print "\t\t\"id\": \"" + str(page[0]) + "\", "
	print "\t\t\"name\": \"" + url + "\", "
	#adjacents = [row[0] for row in pages if row[3] == page[0]]
	# find my parents
        #find my kids

	print '\t\t\"adjacencies\": [ ',

	firstNode = True
	if isRoot == True and page[0] != 0:
	    rootList.append(page[0])

	if len(children) > 0: 
	    for child in children:
		if not firstNode:
		    print ', ',
		else:
		    firstNode = False
		print '\"' + str(child) + '\"',

	print ']'

	print '\t}'
	firstPage = False

    print ' ];'




conn = sqlite3.connect('places.sqlite')

c = conn.cursor()



# get the root nodes
# prev.url/title/etc would get you referrer info
c.execute("""
select curr.id, curr.url, curr.title, prev.id, prev.url, prev.title, 1, t.visit_date
 from
 moz_places curr, moz_places prev, moz_historyvisits frm, moz_historyvisits t
 where
 t.place_id = curr.id and
 frm.place_id = prev.id and
 frm.id = t.from_visit and
 curr.url like 'http://en.wikipedia.org/%' and
 prev.url not like 'http://en.wikipedia.org/%'""")

rootPages = c.fetchall();
# set all the root page prev's to our URL

c.execute("""
select mp.id, mp.url, mp.title, 0, '/', 'Wikipedia', 1, mh.visit_date
 from 
 moz_historyvisits mh, moz_places mp 
 where 
 mh.from_visit not in (select id from moz_historyvisits) and 
 mp.id = mh.place_id and 
 mp.url like 'http://en.wikipedia.org/%'
""")

brokenPages = c.fetchall();

#sqlite> select * from moz_places where url like '%Vundo';
#158698|http://en.wikipedia.org/wiki/Vundo|Vundo - Wikipedia, the free encyclopedia|gro.aidepikiw.ne.|1|0|0|49|20|1262026023964784
#sqlite> select * from moz_historyvisits where place_id = 158698;
#185498|185497|158698|1262026023964784|1|43627457454016632
#sqlite> select * from moz_historyvisits where id = 185497;
#
#select place_id from moz_historyvisits where from_visit not in (select id from moz_historyvisits)


c.execute("""
select curr.id, curr.url, curr.title, prev.id, prev.url, prev.title, 0, t.visit_date
 from
 moz_places curr, moz_places prev, moz_historyvisits frm, moz_historyvisits t
 where
 t.place_id = curr.id and
 frm.place_id = prev.id and
 frm.id = t.from_visit and
 prev.url like 'http://en.wikipedia.org/%' and
 curr.url like 'http://en.wikipedia.org/%'
""")

internalPages = c.fetchall();

c.execute("""
select curr.id, curr.url, curr.title, prev.id, prev.url, prev.title, 0, t.visit_date
 from
 moz_places curr, moz_places prev, moz_historyvisits frm, moz_historyvisits t
 where
 t.place_id = curr.id and
 frm.place_id = prev.id and
 frm.id = t.from_visit and
 prev.url like 'http://en.wikipedia.org/%' and 
 curr.url not like 'http://en.wikipedia.org/%'
""")


finalPages = c.fetchall();


pages = []
pages.extend(rootPages)
pages.extend(brokenPages)
pages.extend(internalPages)
pages.extend(finalPages)
pages.append([0, "/", "Wikipedia", -1, "http://www.google.com", "Google", 1, 0])


printJSON()


