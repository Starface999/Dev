class User < ActiveRecord::Base
	has_secure_password
end

# Here's the behavior that has_secure_password gives you
# Schema: User(name:string, password_digest:string)
# user = User.new(name: 'david', password: '', password_confirmation: 'nomatch')
# user.save                                                       # => false, password required
# (omit a password_confirmation column to disable this behavior)
# user.password = 'mUc3m00RsqyRe'
# user.save                                                       # => false, confirmation doesn't match
# user.password_confirmation = 'mUc3m00RsqyRe'
# user.save                                                       # => true
# user.authenticate('notright')                                   # => false
# user.authenticate('mUc3m00RsqyRe')                              # => user
# User.find_by(name: 'david').try(:authenticate, 'notright')      # => false
# User.find_by(name: 'david').try(:authenticate, 'mUc3m00RsqyRe') # => user