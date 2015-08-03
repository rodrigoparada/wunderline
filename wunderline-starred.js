#!/usr/bin/env node

var app = require('commander')
var getLists = require('./lib/get-lists')
var printList = require('./lib/print-list')

app
  .description('View starred tasks')
  .parse(process.argv)

getLists(function (err, data) {
  if (err) process.exit(1)

  data.forEach(function (list) {
    list.tasks = list.tasks.filter(function (item) {
      return item.starred
    })
    printList(list)
  })
})
