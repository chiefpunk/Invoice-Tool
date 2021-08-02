import React from 'react'
import { useSelector } from 'react-redux'
import InvoiceItem from './InvoiceItem'

export default function InvoiceItemList(props) {
  const items = useSelector((state) => state.invoice.items)
  return (
    <div>
      <div className="px-6 py-2">
        <p className="text-xs text-grey-100">INVOICES - 54</p>
      </div>
      <div className="flex flex-col h-screen overflow-y-scroll">
        {items?.map((item) => (
          <InvoiceItem item={item} />
        ))}
      </div>
    </div>
  )
}