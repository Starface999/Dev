class WelcomeController < ApplicationController
	def index
		@random = Random.new.rand(100)
		render('index')
	end

	def about
		@random = Random.new.rand(100)
		render('index')
	end
end
