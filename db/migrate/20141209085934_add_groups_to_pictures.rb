class AddGroupsToPictures < ActiveRecord::Migration
  def change
    add_column :pictures, :groups, :string
  end
end
