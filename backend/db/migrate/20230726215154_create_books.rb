class CreateBooks < ActiveRecord::Migration[7.0]

  def up
    create_table :books do |t|
      t.string :title, null: false
      t.integer :price, null: false
      t.integer :school_id, null: false

      t.timestamps
    end

    add_index :books, :school_id
    add_foreign_key :books, :schools, column: :school_id, primary_key: :id

  end

  def down
    drop_table :books
    remove_index :books, column: :school_id, if_exists: true
    remove_foreign_key :books, column: :school_id, if_exists: true
  end

end
