# == Schema Information
#
# Table name: guests
#
#  id                     :integer          not null, primary key
#  name                   :string(255)
#  email                  :string(255)
#  will_be_present        :boolean
#  asks_for_mail_reminder :boolean
#  created_at             :datetime
#  updated_at             :datetime
#

class Guest < ActiveRecord::Base

    validates :name, :will_be_present, presence: true
    validates :email, uniqueness: true

end
