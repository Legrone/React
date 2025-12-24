function ItemsLayout ({children}) {
    return (
    <div className="grid grid-cols-4 p-4">
      {children}
    </div>
    )
}

export default ItemsLayout