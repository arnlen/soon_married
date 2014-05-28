class CreateGuests < ActiveRecord::Migration
  def change
    create_table :guests do |t|
      t.string :name
      t.string :email
      t.boolean :will_be_present
      t.boolean :asks_for_mail_reminder

      t.timestamps
    end
  end
end
