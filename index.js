const followers = [...document.querySelectorAll('.FPmhX')].map(n => n.textContent)

const following = [...document.querySelectorAll('.FPmhX')].map(n => {
  const attrs = n.attributes
  return {title: attrs.title.value, href: attrs.href.value}
})

const delta = following.reduce((acc, v) => {
  if (!followers.includes(v.title)) {
    acc.push(v)
  }
  return acc
}, [])

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const asyncClick = btn => sleep(300).then(() => btn.click())

const clearDelta = () => {
  let counter = 0
  let workWindow = window.open(location.origin, '_blank')

  const proceedOrStop = () => sleep(2000).then(() => {
    if (delta.length > counter) {
      ++counter
      sleep(1000).then(() => unsubscribe(counter))
    }
  })

  const unsubscribe = async (n) => {
    workWindow.location.href = `${location.origin}${delta[n].href}`
    const btn = workWindow.document.querySelector('._5f5mN')
    if (btn) {
      btn.click()
      await asyncClick(workWindow.document.querySelector('.-Cab_'))
    }
    await proceedOrStop()
  }

  unsubscribe(0)
}

clearDelta()
