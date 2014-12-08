class AddThumbMediumHdToPictures < ActiveRecord::Migration
  def change
  	add_attachment :pictures, :thumb
  	add_attachment :pictures, :medium
  	add_attachment :pictures, :hd
  end
end
