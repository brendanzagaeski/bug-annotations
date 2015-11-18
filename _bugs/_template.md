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


# The "Good", "Bad", and "Fixed" versions are the named releases:
#
# (a) Before the problem started
# (b) When the problem first appeared
# (c) When the fix was included
#
# These should be as precise as possible, but they do not need to be perfect.
# For example, for (b) it is not necessary to test back through earlier alpha
# or beta versions of the same release to see if the bug was present.
#
# The "named releases" are cataloged in _data/versions.yml. Ideally
# versions.yml could eventually be deprecated in favor of using the raw live
# information from the updater service.
#
# If the string matches a "named release", then the bug table will
# automatically fill out the "Broken Since" column with the exact version
# numbers for the affected product(s).
#
# If the string does _not_ match one of the named releases, then it will be
# processed as Markdown and displayed directly in the "Broken Since" column.
#
# If "firstBadVersion" is set to a non-null value, then the issue is known to
# be a regression.

lastGoodVersion: "iOS 9.1 WatchKit Hotfix"
firstBadVersion: "Cycle 6"
firstFixedVersion: ""



# The "fixedOn" field is a list that pairs channel names with booleans. The
# exact spelling and capitalization of the channel names must not be changed.
# Each entry is optional (and defaults to "false").
#
# This might seem redundant with "firstFixedVersion", but there are cases where
# a bug can be fixed on Stable before it is fixed on Beta or Alpha. Also,
# setting one of these booleans can be more convenient than specifiying an
# exact "firstFixedVersion" when entering values by hand.

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
version: !!str XI 9.1 (iOS 9.1)
status: RESOLVED FIXED
opSys: Windows
priority: Normal
severity: normal
targetMilestone: C6SR1
---
