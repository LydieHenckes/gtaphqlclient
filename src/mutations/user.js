import { gql } from '@apollo/client';
//запрос - просто строка и gql преобразовывает чтобы получить запрос

export const CREATE_USER = gql `
	mutation createUser($input: UserInput) {
		createUser(input: $input) {
			id
			username
			age
		}
	}
`

