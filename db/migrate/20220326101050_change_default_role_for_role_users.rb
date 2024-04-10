# frozen_string_literal: true

class ChangeDefaultRoleForRoleUsers < ActiveRecord::Migration[6.1]
  def change
    change_column_default :users, :admin, 0
  end
end
