namespace :populate do

  desc "Add correct groups to pictures"
  task add_groups_to_pictures: :environment do

		Picture.all.each_with_index do |picture, index|
			groups = if index <= 13
				["preparation"]
			elsif index <= 24
				["cityhall"]
			elsif index <= 68
				["church"]
			elsif index <= 86
				["shooting"]
			else
				["night"]
			end
			picture.update_attributes! groups: groups
		end

  end

end
