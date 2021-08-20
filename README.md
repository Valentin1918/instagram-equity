# instagram-equity
Search delta between followers and followings and unsubscribe of them

first of all scroll down lo load whole followers and run 
`const followers = [...document.querySelectorAll('.FPmhX')].map(n => n.textContent)`
after do the same for followings and run in console
`const following = [...document.querySelectorAll('.FPmhX')].map(n => {
  const attrs = n.attributes
  return {title: attrs.title.value, href: attrs.href.value}
})`

all other code can be just inserted below in console
(if your connection is fast -- you can update timings for not waiting too long)
