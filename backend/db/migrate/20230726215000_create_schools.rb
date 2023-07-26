class CreateSchools < ActiveRecord::Migration[7.0]

  def up
    create_table :schools do |t|
      t.string :name, null: false

      t.timestamps
    end
  end

  def down
    drop_table :schools
  end

end
