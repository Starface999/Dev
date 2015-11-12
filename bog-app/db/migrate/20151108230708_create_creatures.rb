class CreateCreatures < ActiveRecord::Migration
  def change
    create_table :creatures do |t|
      t.string :title
      t.text :description
      t.text :image_url

      t.timestamps null: false
    end
  end
end
