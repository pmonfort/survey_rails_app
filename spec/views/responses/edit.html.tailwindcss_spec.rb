require 'rails_helper'

RSpec.describe "responses/edit", type: :view do
  let(:response) {
    Response.create!()
  }

  before(:each) do
    assign(:response, response)
  end

  it "renders the edit response form" do
    render

    assert_select "form[action=?][method=?]", response_path(response), "post" do
    end
  end
end
