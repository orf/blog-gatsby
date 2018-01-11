---
layout: single
title: "A test RSS feed service"
date: 2014-04-01 02:33:57.398105
permalink: /a-test-rss-feed-service
categories:
   - projects
---

The coursework set for my Distributed Systems involves reading new items from RSS feeds (such as the BBC News feed or the UK traffic incident feed). To help me build the system I developed a simple service that serves up RSS feeds that are regularly automatically updated with nonsense items, and it might be useful for anyone else doing something related. It sure beats waiting for BBC news to publish a story or someone to crash on the M4.

The service can be found here: [http://rss.tomforb.es/](http://rss.tomforb.es/) and is really simple to use.

#### Basic feeds

A feed is accessed by a unique key. This key can be anything, e.g [http://rss.tomforb.es/feed/rss/somefeed](http://rss.tomforb.es/feed/rss/somefeed) or [http://rss.tomforb.es/feed/atom/blah123](http://rss.tomforb.es/feed/atom/blah123). If you can't think of a key (or don't want to hard code one while testing) then you can use [http://rss.tomforb.es/feed/rss/cookie](http://rss.tomforb.es/feed/rss/cookie), requesting this will set a cookie which must be re-sent with each request to get the same feed.

#### Message rate

Messages will be added to the feed once every 30 seconds, but this is configurable with the ?time parameter. To create a feed with a new entry every 15 seconds request this URL: [http://rss.tomforb.es/feed/rss/df2c0fbcd2814c288973a804c60df857?time=15](http://rss.tomforb.es/feed/rss/df2c0fbcd2814c288973a804c60df857?time=15)

#### Simulate issues

Appending ?tryme to any feed URL will trigger a fault 25% of the time. This fault will be one of:

   * Invalid XML response
   * Internal server error (http 500)
   * Non XML response
   * Non HTTP response
   * Redirect to Google
   * Out of order or missing results
   * Results with future dates

You can use this to ensure any system you build is proofed against one of those faults.

#### Code
You can check out the source code [here on GitHub](https://github.com/orf/feedtester)
    