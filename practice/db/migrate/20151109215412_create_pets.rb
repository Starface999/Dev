class CreatePets < ActiveRecord::Migration
  def change
    create_table :pets do |t|
      t.string :name

      t.timestamps

      t.references :owner
    end
  end
end
