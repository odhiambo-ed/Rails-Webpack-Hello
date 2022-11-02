class RenameGreetingToMessage < ActiveRecord::Migration[7.0]
  def change
    rename_column :greetings, :greeting, :message
  end
end
