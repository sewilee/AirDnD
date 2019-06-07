class UpdateBookings < ActiveRecord::Migration[5.2]
  def change
    rename_column :bookings, :state, :status
    change_column_default :bookings, :status, "pending"
  end
end
