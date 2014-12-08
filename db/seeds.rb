# Compress to thumb and medium then upload to S3
(1..155).each do |n|
	file = "wendy-et-arnaud-#{n}.jpg"
	p "Current file: #{file}"
	system "convert app/assets/images/#{file} -quality 50% -resize 4% app/assets/images/thumb-#{file}"
	p "- 1 - Converted to thumb"
	system "convert app/assets/images/#{file} -quality 80% -resize 20% app/assets/images/medium-#{file}"
	p "- 2 - Converted to medium"

	thumb_file = File.new("app/assets/images/thumb-#{file}")
	medium_file = File.new("app/assets/images/medium-#{file}")
	hd_file = File.new("app/assets/images/#{file}")

	p "- 3 - Uploading..."

	Picture.create!(
		thumb: thumb_file,
		medium: medium_file,
		hd: hd_file)

	system "rm app/assets/images/thumb-#{file}"
	system "rm app/assets/images/medium-#{file}"
	system "rm app/assets/images/#{file}"

	p " - 4 - Uploaded and local files removes"
end