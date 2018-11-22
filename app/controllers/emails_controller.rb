class EmailsController < ApplicationController
  def index

  end

  def destroy
    respond_to do |format|
    	format.html { redirect_to emails_url, notice: 'Email was successfully deleted.' }
      	format.js
    end
  	Email.find(params[:id]).destroy

  end

  def show
  	respond_to do |format|
    	format.html { redirect_to emails_url }
      	format.js
    end
	Email.update(params[:id],read: true)
  end
end