import { gql } from '@apollo/client';
//запрос - просто строка и gql преобразовывает чтобы получить запрос

export const GET_ALL_USERS = gql `
	query {
		getAllUsers {
			id, username, age
		}
	}

	
`