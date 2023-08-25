const checkbox_advanced = $('#batch_connect_session_context_advanced');
const dropdown_version = $('#batch_connect_session_context_version');
const textbox_modules = $('#batch_connect_session_context_modules');
const textbox_commands = $('#batch_connect_session_context_commands');

function set_visibility_of_form_group(form_element, show) {
  let parent = form_element.parent();

  // kick out if you didn't find what you're looking for
  if(parent.length <= 0) {
    return;
  }

  if(show) {
    parent.show();
  } else {
    parent.hide();
  }
}

function version_change_handler(event){ 
  set_visibility_of_form_group(textbox_commands, dropdown_version.val() === "custom" && checkbox_advanced.get(0).checked);
  set_visibility_of_form_group(textbox_modules, dropdown_version.val() !== "custom" && checkbox_advanced.get(0).checked);
}

function checkbox_advanced_change_handler(event) {
  set_visibility_of_form_group(dropdown_version, checkbox_advanced.get(0).checked);
  version_change_handler(event);
}

dropdown_version.change((event) => version_change_handler(event));
checkbox_advanced.change((event) => checkbox_advanced_change_handler(event));

checkbox_advanced_change_handler(null);
