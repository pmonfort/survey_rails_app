require 'rails_helper'

RSpec.describe "responses/show", type: :view do
  before(:each) do
    assign(:response, Response.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end
