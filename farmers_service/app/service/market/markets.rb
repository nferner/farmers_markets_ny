class Muse::Jobs < ApiService
  private

  BASE_URL = "http://localhost:3000/api/v1/markets".freeze

  def fetch
    HTTPParty.get(request_url.body)
  end

  def request_url
    BASE_URL + keys.merge(api_key: ENV["MARKET"]).to_query
  end
end

# this is Object Oriented Programming at its finest, this has nother to do with rails but with design patterns
