class Api::V1::GreetingsController < ApplicationController
  def index
    @greetings = Greeting.all

    render json: @greeting
  end
end