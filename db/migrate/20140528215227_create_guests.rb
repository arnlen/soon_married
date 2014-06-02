class CreateGuests < ActiveRecord::Migration
  def change
    create_table :guests do |t|
      t.string :name
      t.string :email
      t.string :comment
      t.boolean :will_be_present

      t.timestamps
    end
  end
end
