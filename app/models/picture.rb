class Picture < ActiveRecord::Base
 # This method associates the attribute ":avatar" with a file attachment
  has_attached_file :thumb
  has_attached_file :medium
  has_attached_file :hd

  # Validate the attached image is image/jpg, image/png, etc
  do_not_validate_attachment_file_type :thumb
  do_not_validate_attachment_file_type :medium
  do_not_validate_attachment_file_type :hd
end