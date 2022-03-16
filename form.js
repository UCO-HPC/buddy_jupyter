// Set the version as a global variable
const version = $('#batch_connect_session_context_version');

/**
 * Toggle the visibility of a form group
 *
 * @param      {string}    form_id  The form identifier
 * @param      {boolean}   show     Whether to show or hide
 */
function toggle_visibility_of_form_group(form_id, show) {
  let form_element = $(form_id);
  let parent = form_element.parent();

  // kick out if you didn't find what you're looking for
  if(parent.size() <= 0) {
    return;
  }

  if(show) {
    parent.show();
  } else {
    form_element.val('');
    parent.hide();
  }
}

/**
 * Sets the change handler for the cluster select.
 */
function set_version_change_handler() {
  let version_input = $('#batch_connect_session_context_version');
  version_input.change((event) => version_change_handler(event));
}

function version_change_handler(event) {
  console.log("Current selected version is:", version);
//  console.log(Object.getOwnPropertyNames(version));
  console.log(version.parent());
//  console.log("Help value is: ", $('#batch_connect_session_context_version option:custom').val());
//  toggle_options("batch_connect_session_context_modules");
//  toggle_options("batch_connect_session_context_commands");
//  fix_num_cores(event);
//  toggle_email_on_started();
}

set_version_change_handler();
