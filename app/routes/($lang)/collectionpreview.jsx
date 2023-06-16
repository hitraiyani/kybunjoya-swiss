import React from 'react'
import {json, redirect} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';

export async function loader({request, context, params}) {
    return redirect('https://b2b.kybunjoya.swiss/pages/collectionpreview');
}
export default function collectionpreview() {
  return (
    <div>
        <h1>Collection preive</h1>
    </div>
  )
}
