# require "awesome_print"
# require "HTTParty"

# response = HTTParty.get('http://api.spotify.com/v1/search?q=white&type=album')

# # while $i < $num  do
# data = JSON.parse(response.body)

# data['albums']['items'].each do |a|
# 	ap a['name']
# end

require 'pismo'

doc = Pismo::Document.new('http://www.rubyinside.com/cramp-asychronous-event-driven-ruby-web-app-framework-2928.html')

doc.title
doc.author
doc.lede
doc.keywords