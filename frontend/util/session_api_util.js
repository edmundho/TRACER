export const signup = user => (
  $.ajax({
    url: '/api/users',
    method: 'post',
    data: { 
      user: {
        username: user.username,
        password: user.password,
        first_name: user.firstName,
        last_name: user.lastName,
        birth_date: user.birthDate,
      }
    }
  })
);

export const login = user => (
  $.ajax({
    method: 'post',
    url: '/api/session',
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    url: '/api/session',
    method: 'delete'
  })
);

