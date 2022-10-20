if @argonaute.persisted?
  json.form render(partial: "argonautes/form", formats: :html, locals: {argonaute: @argonaute, argonaute: Argonaute.new})
  json.inserted_name render(partial: "argonautes/list", formats: :html, locals: {argonautes: @argonautes})
else
  json.form render(partial: "argonautes/form", formats: :html, locals: {argonautes: @argonautes})
end
