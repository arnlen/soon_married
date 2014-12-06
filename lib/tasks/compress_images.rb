(1..155).each do |n|
	file = "wendy-et-arnaud-#{n}.jpg"
	system "convert #{file} -quality 50% -resize 4% thumb-#{file}"
	p "#{file} converted"
end