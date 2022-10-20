class ArgonautesController < ApplicationController

  def index
    @argonautes = Argonaute.all
    @argonaute = Argonaute.new
  end

  def create
    @argonaute = Argonaute.new(argonaute_params)
    if @argonaute.save
      redirect_to root_path
    else
      render :root
    end
    respond_to do |format|
      if @review.save
        format.html { redirect_to root_path }
        format.json
      else
        format.html { render :root, status: :unprocessable_entity }
        format.json
      end
    end
  end

  private

  def argonaute_params
    params.require(:argonaute).permit(:name)
  end

end
