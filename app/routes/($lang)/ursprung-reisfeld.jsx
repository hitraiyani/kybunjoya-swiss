import React from 'react'
import {json, redirect} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';

export async function loader({request, context, params}) {
    return redirect('/');
}

export default function ursprungReisfeld() {
  return (
    <div>
      
    </div>
  )
}
