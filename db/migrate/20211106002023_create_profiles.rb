class CreateProfiles < ActiveRecord::Migration[6.1]
  def change
    create_table :profiles do |t|
      t.string :name
      t.string :bio
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :followers
      t.integer :following

      t.timestamps
    end
  end
end
