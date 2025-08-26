class CreateResponses < ActiveRecord::Migration[8.0]
  def change
    create_table :responses do |t|
      t.string  :text,      null: false, default: ""
      t.string  :sentiment
      t.integer :score
      t.string  :ip_address
      t.string  :user_agent
      t.boolean :active,    null: false, default: true

      t.timestamps null: false
    end
  end
end
