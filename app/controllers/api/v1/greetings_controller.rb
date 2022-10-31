class Api::V1::GreetingsController < ApplicationController
  def index
    @greetings = Greeting.all
    if @greetings.empty?
      json_response({ msg: 'No Greetings Available at the moment' }, 400)
    else
      render json: @greeting
    end
  end
end
