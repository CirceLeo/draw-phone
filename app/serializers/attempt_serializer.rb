class AttemptSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :challenge_id, :title, :attempt_data_url
end
