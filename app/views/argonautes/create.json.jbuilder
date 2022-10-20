if @argonaute.persisted?
  json.form render(partial: "form", formats: :html, locals: { argonaute: Argonaute.new })
  json.inserted_name render(partial: "list", formats: :html, locals: { argonautes: @argonautes })
else
  json.form render(partial: "form", formats: :html, locals: { argonaute: @argonaute })
end
