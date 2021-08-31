import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Appointment = {
  _id: Scalars['ID'];
  instructor: Instructor;
  date: Scalars['String'];
  timeslot: Scalars['String'];
  isBooked: Scalars['Boolean'];
};

export type Instructor = {
  _id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  zoomLink: Scalars['String'];
  photo: Scalars['String'];
};

export type Mutation = {
  /** Books an appointment. */
  bookAppointment: Appointment;
};


export type MutationBookAppointmentArgs = {
  apptId: Scalars['ID'];
};

export type Query = {
  /** List of all the instructors in the course. */
  instructors: Array<Instructor>;
  /** Appointments of the specified instructor */
  appointments?: Maybe<Array<Appointment>>;
};


export type QueryAppointmentsArgs = {
  instId: Scalars['ID'];
};

export type GetAppointmentsQueryVariables = Exact<{
  instId: Scalars['ID'];
}>;


export type GetAppointmentsQuery = { appointments?: Maybe<Array<Pick<Appointment, '_id' | 'date' | 'timeslot' | 'isBooked'>>> };

export type BookAppointmentMutationVariables = Exact<{
  apptId: Scalars['ID'];
}>;


export type BookAppointmentMutation = { bookAppointment: Pick<Appointment, '_id' | 'date' | 'timeslot'> };

export type GetInstructorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetInstructorsQuery = { instructors: Array<Pick<Instructor, '_id' | 'name' | 'photo'>> };


export const GetAppointmentsDocument = gql`
    query getAppointments($instId: ID!) {
  appointments(instId: $instId) {
    _id
    date
    timeslot
    isBooked
  }
}
    `;

/**
 * __useGetAppointmentsQuery__
 *
 * To run a query within a React component, call `useGetAppointmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAppointmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAppointmentsQuery({
 *   variables: {
 *      instId: // value for 'instId'
 *   },
 * });
 */
export function useGetAppointmentsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetAppointmentsQuery, GetAppointmentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetAppointmentsQuery, GetAppointmentsQueryVariables>(GetAppointmentsDocument, options);
      }
export function useGetAppointmentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAppointmentsQuery, GetAppointmentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetAppointmentsQuery, GetAppointmentsQueryVariables>(GetAppointmentsDocument, options);
        }
export type GetAppointmentsQueryHookResult = ReturnType<typeof useGetAppointmentsQuery>;
export type GetAppointmentsLazyQueryHookResult = ReturnType<typeof useGetAppointmentsLazyQuery>;
export type GetAppointmentsQueryResult = Apollo.QueryResult<GetAppointmentsQuery, GetAppointmentsQueryVariables>;
export const BookAppointmentDocument = gql`
    mutation bookAppointment($apptId: ID!) {
  bookAppointment(apptId: $apptId) {
    _id
    date
    timeslot
  }
}
    `;
export type BookAppointmentMutationFn = Apollo.MutationFunction<BookAppointmentMutation, BookAppointmentMutationVariables>;

/**
 * __useBookAppointmentMutation__
 *
 * To run a mutation, you first call `useBookAppointmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBookAppointmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bookAppointmentMutation, { data, loading, error }] = useBookAppointmentMutation({
 *   variables: {
 *      apptId: // value for 'apptId'
 *   },
 * });
 */
export function useBookAppointmentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<BookAppointmentMutation, BookAppointmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<BookAppointmentMutation, BookAppointmentMutationVariables>(BookAppointmentDocument, options);
      }
export type BookAppointmentMutationHookResult = ReturnType<typeof useBookAppointmentMutation>;
export type BookAppointmentMutationResult = Apollo.MutationResult<BookAppointmentMutation>;
export type BookAppointmentMutationOptions = Apollo.BaseMutationOptions<BookAppointmentMutation, BookAppointmentMutationVariables>;
export const GetInstructorsDocument = gql`
    query getInstructors {
  instructors {
    _id
    name
    photo
  }
}
    `;

/**
 * __useGetInstructorsQuery__
 *
 * To run a query within a React component, call `useGetInstructorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInstructorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInstructorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetInstructorsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetInstructorsQuery, GetInstructorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetInstructorsQuery, GetInstructorsQueryVariables>(GetInstructorsDocument, options);
      }
export function useGetInstructorsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetInstructorsQuery, GetInstructorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetInstructorsQuery, GetInstructorsQueryVariables>(GetInstructorsDocument, options);
        }
export type GetInstructorsQueryHookResult = ReturnType<typeof useGetInstructorsQuery>;
export type GetInstructorsLazyQueryHookResult = ReturnType<typeof useGetInstructorsLazyQuery>;
export type GetInstructorsQueryResult = Apollo.QueryResult<GetInstructorsQuery, GetInstructorsQueryVariables>;