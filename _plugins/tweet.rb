require 'tweepy'

module TweetPlugin
  class TweetGenerator < Jekyll::Generator
    def generate(site)
      consumer_key = "jwAxoqlhMIXaFphE1cz1AQ4Qy"
      consumer_secret = "yk3WvsUtMRQYspuF7yxAheAVlKfTy5L7IIICMOpBvL1cykSnks"
      access_token = "1720620490081878016-OEdPJi85zs2NooVo5RBaDT4lmZn3Qo"
      access_token_secret = "DH6D1XBZuYxO81LZTIcpUuZcfgTKjtcu1U6KV7U71Bc6f"

      auth = Tweepy::OAuthHandler.new(consumer_key, consumer_secret)
      auth.set_access_token(access_token, access_token_secret)
      api = Tweepy::API.new(auth)

      site.pages.each do |page|
        if page.name == "tweet.md"
          if page['tweet']
            tweet_text = page['tweet']

            begin
              api.update_status(tweet_text)
              page['message'] = "Tweet posted successfully!"
            rescue Tweepy::Error => e
              page['message'] = "Error posting tweet: #{e.message}"
            end
          end
        end
      end
    end
  end
end