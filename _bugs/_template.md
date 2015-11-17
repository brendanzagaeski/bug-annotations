---
# For the most part you can omit any of these named entries, and the final
# rendered view will still correctly show just the parts you have included.

# Each "*Markdown" item contains free-form text that will be rendered as
# Markdown in the final HTML table.



# The summary and workaround are combined together in one table cell. So it is
# useful to include some bold text at the beginning of the workaround like
# "**Possible workaround**: "

summaryMarkdown: ""
workaroundMarkdown: "**Workaround**: "



# The "statusNotes" item contains free-form notes for the "Additional Status"
# table cell. This is a place to add extra information to supplement the
# following 3 kinds of automatic text:
#
# 1. If at least one channel is set to true in "fixedOn", the cell will
# automatically include "**RELEASED** to the {{ channel | capitalize }}
# Channel".
#
# 2. If a "status" is set for the bug and if it matches one of the items in
# _data/statuses.yml, the corresponding text from that file will be added.
#
# 3. If a "targetMilestone" is set for the bug and if it matches one of the
# items in _data/targetMilestones.yml, the corresponding text from that file
# will be added.

statusNotesMarkdown: ""


# The "first known" named releases:
#
# (a) Before the problem started
# (b) When the problem first appeared
# (c) When the fix was included
#
# These should be as precise as known, but they do not need to be perfect. For
# example, for (b) it is not necessary to track back through earlier alpha or
# beta versions of the same release to see if the bug was present.
#
# The "named releases" are cataloged in _data/versions.yml. Ideally
# versions.yml could eventually be deprecated in favor of using the raw live
# information from the updater service.
#
# If "firstBadVersion" is set to a non-null value, then the issue is known to
# be a regression.

lastGoodVersion: iOS 9.0
firstBadVersion: iOS 9.1 Beta 1
firstFixedVersion: ""



# A list of pairs of channel names and booleans. The exact spelling and
# capitalization of the channel names must not be changed. Each entry is
# optional (defaulting to "false").
#
# This might at first seem redundant with "firstFixedVersion", but there are
# cases where a bug can be fixed on Stable before it is fixed on Beta
# or Alpha. Also, when tracking bug release status by hand it can be
# convenient not to have to enter an exact "firstFixedVersion".

fixedOn:
    Stable: true
    Beta: true
    Alpha: true



# A list of strings, mostly to allow filtering for bugs that only affect iOS or
# Android development within _one_ IDE, but there might be other interesting
# uses for this too.

tags:
    - XamarinVS
    - iOS


# The values for the fields below should exactly match the values from
# Bugzilla. One exception is that you can adjust the "priority" to change the
# bug's default sort-order on this website. (The site displays the bugs in
# descending order of priority. )
#
# "opSys" is optional

private: false
product: iOS
version: XI 9.1 (iOS 9.1)
status: RESOLVED FIXED
opSys: Windows
priority: Normal
severity: normal
targetMilestone: C6SR1
---
