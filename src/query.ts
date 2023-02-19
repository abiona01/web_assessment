import { gql } from '@apollo/client'

// Query for company information

const companyQuery = gql`
  query companyQuery {
    company {
      ceo
      cto
      name
    }
  }
`

export default companyQuery
