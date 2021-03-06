/*
 * Copyright Strimzi authors.
 * License: Apache License 2.0 (see the file LICENSE or http://apache.org/licenses/LICENSE-2.0.html).
 */

import { Expectations } from '../ExpectationTypes';

export default {
  Topic: {
    type: 'Topic', // the GraphQL type name
    operations: {
      create: ({ mutations }) => {
        if (Object.keys(mutations).length === 0) {
          throw new Error("mutations is empty")
        }
        return true;
      },
    }
  },
} as Expectations;
