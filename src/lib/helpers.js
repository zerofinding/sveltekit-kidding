function dateToInternalDate(reqDate){
  const fdate = new Date(reqDate)
  return `${fdate.getFullYear()}-${String(fdate.getMonth() + 1).padStart(2, '0')}-${String(fdate.getDate()).padStart(2, '0')}`
}

export function internalDateToDate(reqDate){
  const fdates = dateToInternalDate(reqDate)
  const fdate = new Date(fdates)
  
  if (isNaN(fdate.getTime())) return
  const dd = `${fdate.getDate()} ${fdate.toLocaleString('default', { month: 'short' })} ${fdate.getFullYear()}`
  return dd
}

export function handleSplit(field, styling, title, slug, color, external = false){
  const fields = field.split(',')
  let xsplit = ''

  if (fields.length === 1) {
    if(external === true){
      const fields2 = field.split('://')
        
      xsplit += `<a href="https://${fields2[1]}" alt="${title} - ${field}" title="${title} - ${field}" target="_blank" rel="noopener">`

      field = fields2[0].replace(': https', '').replace(': http', '')
    }else{
      if(slug !== '' && external === false){
        xsplit += `<a href="${slug}" sveltekit:prefetch alt="${title} - ${field}" title="${title} - ${field}">`
      }
    }

    xsplit += `<div class="${styling}">
      <p class="text-center" style="color:${color};">${field}</p>
    </div>`

    if(slug !== ''){
      xsplit += `</a>`
    }
  } else {
    for (let i = fields.length - 1; i >= 0; i--) {
      if(external === true){
        const fields2 = fields[i].split('://')
        
        xsplit += `<a href="https://${fields2[1]}" alt="${title} - ${field}" title="${title} - ${field}" target="_blank" rel="noopener">`

        fields[i] = fields2[0].replace(': https', '').replace(': http', '')
      }else{
        if(slug !== '' && external === false){
          xsplit += `<a href="${slug}" sveltekit:prefetch alt="${title} - ${field}" title="${title} - ${field}">`
        }
      }

      xsplit += `<div class="${styling}">
        <p class="text-center" style="color:${color};">${fields[i]}</p>
      </div>`

      if(slug !== ''){
        xsplit += `</a>`
      }
    }
  }
  return xsplit
}